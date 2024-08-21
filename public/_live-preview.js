import { ContentfulLivePreview } from '@contentful/live-preview';

ContentfulLivePreview.init({
  locale: 'en-US',
  debugMode: true,
  enableLiveUpdates: true,
});

ContentfulLivePreview.subscribe('ENTRY_SAVED', {
  callback: async () => {
    alert('save');
    const pathname = window.location.pathname;
    await fetch(`/api/revalidate?pathname=${pathname}`);
    window.location.reload();
  },
});