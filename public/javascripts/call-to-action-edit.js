var CallToActionEdit = {
  init: function() {
    tinyMCE.init({
      mode: "textareas",
      theme_advanced_toolbar_location: "top",
      plugins: "safari,spellchecker,advlink,inlinepopups,preview,contextmenu,paste,visualchars",
      theme_advanced_blockformats: "p,h1,h2,h3,h4,blockquote",
      //server_url: "http://www.matthewpaulmoore.com",
    	theme_advanced_statusbar_location : "bottom",
    	theme_advanced_buttons1 : "undo,redo,removeformat,|,bold,italic,underline,|,link,unlink,charmap,|,code,fullscreen",
      theme: "advanced",
      theme_advanced_buttons2: "",
      theme_advanced_resizing: true,
      theme_advanced_buttons3: "",
      theme_advanced_toolbar_align: "left",
      gecko_spellcheck: true,
      editor_selector: "call-to-action-tinymce",
      skin: "o2k7",
  		skin_variant: "silver",
      theme_advanced_resize_horizontal: false
    });
  }
}
CallToActionEdit.init();