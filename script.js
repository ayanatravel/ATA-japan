$(function(){
    //地域を選択
    $('.area-btn').click(function(){
        $('.area-overlay').show();
        $('.pref-area').show();
        var area = $(this).data('area');
        $('[data-list]').hide();
        $('[data-list="' + area + '"]').show();
    });
    
    //レイヤーをタップ
    $('.area-overlay').click(function(){
        prefReset();
    });
    
    //都道府県をクリック
    $('.pref-list [data-id] ').click(function(){
        if($(this).data('id')){
          var  id= $(this).data('id');          
          //このidを使用して行いたい操作をしてください
          //都道府県IDに応じて別ページに飛ばしたい場合はこんな風に書く↓
          window.location.href = 'https://kinocolog.com/pref_select/' + id ;
          
          prefReset();

        }
    });
    
    //表示リセット
    function prefReset(){
        $('[data-list]').hide();
        $('.pref-area').hide();
        $('.area-overlay').hide();
    }
});

