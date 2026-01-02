(function() {
  // メイン画像設定欄をタイトル横に持ってくるための rowspan を設定 
  const updateRowspan = () => {
    const container = document.querySelector('.entryFormHead');
    if (!container) return;

    const table = container.querySelector('table');
    if (!table) return;

    const rowCount = table.rows.length;
    const mainImageTd = document.getElementById('main-image-custom');
    if (mainImageTd) {
      mainImageTd.rowSpan = rowCount;
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateRowspan);
  } else {
    updateRowspan();
  }

  // タイトルの改行を無効化する
  document.addEventListener('DOMContentLoaded', () => {
  const textareas = document.querySelectorAll('textarea.js-no-newline');

  textareas.forEach(target => {
    target.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
    target.addEventListener('input', (e) => {
      const start = target.selectionStart;
      const end = target.selectionEnd;
      
      if (target.value.includes('\n')) {
        target.value = target.value.replace(/\n/g, '');
        target.setSelectionRange(start, end);
      }
    });
  });

  // SEO設定にあるメイン画像を削除
  const element = document.getElementById('seo-entry_main_image');
  if (element) {
    element.remove();
  }

});
})();