import React, { useState, useRef, useEffect } from 'react';
import { getAllVideos, getVideosByCategory, VideoData } from '../data/videos';
import { getAllPhotos, getPhotosByCategory, getImagePath, PhotoData } from '../data/photos';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'performances' | 'campaigns' | 'events' | 'photos'>('all');
  const [videos] = useState<VideoData[]>(getAllVideos());
  const [photos] = useState<PhotoData[]>(getAllPhotos());

  // Refs for YouTube player containers and player instances
  const playerContainers = useRef<Array<HTMLDivElement | null>>([]);
  const playersRef = useRef<Array<any>>([]);
  const [playersReady, setPlayersReady] = useState<boolean[]>([]);
  const [playersPlaying, setPlayersPlaying] = useState<boolean[]>([]);

  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  const getFilteredVideos = () => {
    switch (activeTab) {
      case 'performances':
        return getVideosByCategory('performance');
      case 'campaigns':
        return getVideosByCategory('campaign');
      case 'events':
        return [...getVideosByCategory('event'), ...getVideosByCategory('documentary')];
      default:
        return videos;
    }
  };



  // Load YouTube IFrame API and create players for each video.
  const loadYouTubeAPI = (): Promise<void> => {
    if ((window as any).YT && (window as any).YT.Player) return Promise.resolve();
    return new Promise((resolve) => {
      const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (existing) {
        (window as any).onYouTubeIframeAPIReady = () => resolve();
        return;
      }
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = () => resolve();
    });
  };

  useEffect(() => {
    let mounted = true;
    loadYouTubeAPI().then(() => {
      if (!mounted) return;
      const YT = (window as any).YT;
      videos.forEach((video, idx) => {
        const container = playerContainers.current[idx];
        if (!container) return;
        // Avoid recreating player
        if (playersRef.current[idx]) return;
        playersRef.current[idx] = new YT.Player(container, {
          videoId: video.id,
          playerVars: { rel: 0, modestbranding: 1 },
          events: {
            onReady: () => {
              setPlayersReady((prev) => {
                const copy = prev.slice();
                copy[idx] = true;
                return copy;
              });
            },
            onStateChange: (e: any) => {
              if (e.data === YT.PlayerState.PLAYING) {
                setPlayersPlaying((prev) => { const copy = prev.slice(); copy[idx] = true; return copy; });
                // Pause any other playing players
                playersRef.current.forEach((p: any, j: number) => {
                  if (p && j !== idx && p.getPlayerState && p.getPlayerState() === YT.PlayerState.PLAYING) {
                    p.pauseVideo();
                  }
                });
              } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
                setPlayersPlaying((prev) => { const copy = prev.slice(); copy[idx] = false; return copy; });
              }
            }
          }
        });
      });
    });

    return () => {
      mounted = false;
      // destroy players on unmount
      playersRef.current.forEach((p: any) => { if (p && p.destroy) p.destroy(); });
      playersRef.current = [];
    };
  }, [videos]);

  const tabClass = (tab: string) =>
    `px-4 py-2 rounded-full font-medium transition duration-300 ${activeTab === tab
      ? 'bg-yellow-500 text-white'
      : 'bg-gray-200 text-gray-700 hover:bg-yellow-100'
    }`;

  return (
    <div>
      {/* Gallery Header */}
      <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 playfair">Performance Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience our educational theater performances, sensitization campaigns, and behind-the-scenes moments
          </p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={tabClass('all')}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveTab('performances')}
              className={tabClass('performances')}
            >
              <i data-feather="play-circle" className="inline mr-2"></i>
              Setbook Performances
            </button>
            <button
              onClick={() => setActiveTab('campaigns')}
              className={tabClass('campaigns')}
            >
              <i data-feather="users" className="inline mr-2"></i>
              Sensitization Campaigns
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={tabClass('events')}
            >
              <i data-feather="calendar" className="inline mr-2"></i>
              Events & Behind Scenes
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={tabClass('photos')}
            >
              <i data-feather="camera" className="inline mr-2"></i>
              Photo Gallery ({photos.length})
            </button>
          </div>
        </div>
      </section>

      {/* Content Display */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Videos Section */}
          {activeTab !== 'photos' && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">
                  {activeTab === 'all' ? 'Featured Videos' :
                    activeTab === 'performances' ? 'Setbook Dramatizations' :
                      activeTab === 'campaigns' ? 'Educational Campaigns' :
                        'Events & Documentaries'}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {activeTab === 'all' ? 'Our complete collection of educational theater content' :
                    activeTab === 'performances' ? 'Professional dramatizations of KCSE setbooks' :
                      activeTab === 'campaigns' ? 'Interactive programs addressing critical social issues' :
                        'Behind-the-scenes and event coverage'}
                </p>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
              </div>

              {/* Video Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredVideos().map((video, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <div
                        ref={(el) => { playerContainers.current[index] = el; return; }}
                        className="w-full h-64 rounded-t-xl bg-black relative overflow-hidden"
                        title={video.title}
                      >
                        {!playersReady[index] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                            <span className="sr-only">Loading player</span>
                          </div>
                        )}
                      </div>
                      {/* Play overlay button to trigger player play and pause others */}
                      <button
                        onClick={() => { const p = playersRef.current[index]; if (p && p.playVideo) p.playVideo(); playersRef.current.forEach((pl: any, j: number) => { if (pl && j !== index && pl.getPlayerState && pl.getPlayerState() === (window as any).YT.PlayerState.PLAYING) { pl.pauseVideo(); } }); }}
                        aria-label={`Play ${video.title}`}
                        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition ${playersReady[index] ? 'pointer-events-none' : ''}`}
                      >
                        {!playersPlaying[index] && (
                          <svg className="w-14 h-14 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>
                      {/* Category Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${video.category === 'performance' ? 'bg-blue-500 text-white' :
                            video.category === 'campaign' ? 'bg-green-500 text-white' :
                              video.category === 'event' ? 'bg-purple-500 text-white' :
                                'bg-orange-500 text-white'
                          }`}>
                          {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2 text-lg">{video.title}</h3>
                      <p className="text-gray-600 text-sm">{video.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-500 hover:text-yellow-600 font-medium flex items-center"
                        >
                          <i data-feather="external-link" className="mr-2"></i>
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Photos Section */}
          {activeTab === 'photos' && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Photo Gallery</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Performance moments, audience engagement, and behind-the-scenes captured in stunning photographs
                </p>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
              </div>

              {/* Photo Categories */}
              <div className="mb-12">
                {/* Performance Photos Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    <i data-feather="play" className="inline mr-2"></i>
                    Performance Photos ({getPhotosByCategory('performances').length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getPhotosByCategory('performances').map((photo) => (
                      <div key={photo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={getImagePath(photo.category, photo.filename)}
                          alt={photo.alt}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            console.error(`Failed to load image: ${photo.filename}`);
                            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audience & Fans Photos Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    <i data-feather="users" className="inline mr-2"></i>
                    Audience & Fans ({getPhotosByCategory('audience-fans').length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getPhotosByCategory('audience-fans').map((photo) => (
                      <div key={photo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={getImagePath(photo.category, photo.filename)}
                          alt={photo.alt}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            console.error(`Failed to load image: ${photo.filename}`);
                            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events Photos Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    <i data-feather="calendar" className="inline mr-2"></i>
                    Events & Behind the Scenes ({getPhotosByCategory('events').length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getPhotosByCategory('events').map((photo) => (
                      <div key={photo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={getImagePath(photo.category, photo.filename)}
                          alt={photo.alt}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            console.error(`Failed to load image: ${photo.filename}`);
                            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 playfair">Want to See These Performances Live?</h2>
          <p className="text-gray-600 mb-8">Contact us to bring educational theater to your school or event</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300"
            >
              Book a Performance
              <i data-feather="arrow-right" className="ml-2"></i>
            </a>
            <a
              href="https://www.youtube.com/@brightstarz-arts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-medium rounded-full transition duration-300"
            >
              <i data-feather="youtube" className="mr-2"></i>
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;