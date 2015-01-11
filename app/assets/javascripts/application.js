// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

	$('#hideBox').fadeIn();

	$(document).scroll(function () {
		// if ($(this).scrollTop() < $('#hideBox').height()) {
		// 	$('#hideBox').fadeIn();
		// } else {
		// 	$('#hideBox').fadeOut();
		// }
	});

	$("nav").hover(function(){
		$(this).find("#hideBox").fadeIn();
	}, function() {
		if ($(this).scrollTop() > 0) {
			$(this).find("#hideBox").fadeOut();
		}
	});

	$("#pageTop").click(function() {
		$('html, body').animate({
			scrollTop: $("#welcome").offset().top
		}, 1000);
	});

	$("#worknav").click(function() {
		$('html, body').animate({
			scrollTop: $("#work").offset().top
		}, 1000);
	});

	$("#pressnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#press").offset().top
		}, 1000);
	});

	$("#recruitnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#recruit").offset().top
		}, 1000);
	});


	$("#visionnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#vision").offset().top
		}, 1000);
	});

	$("#mambernav").click(function() {
		$('html, body').animate({
			scrollTop: $("#member").offset().top
		}, 1000);
	});


	$("#companynav").click(function() {
		$('html, body').animate({
			scrollTop: $("#company").offset().top
		}, 1000);
	});

	$("#contactnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
});




$(function(){
    // 「.modal-open」をクリック
    $('.modal-open').click(function(){
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        // モーダルコンテンツの表示位置を設定
        modalResize();
         // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;

            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }

    });
});


$(function(){
$('.content:not(.content:first-of-type)').css('display','none');//一番上の要素以外を非表示
$('.more').nextAll('.more').css('display','none');//ボタンを非表示
$('.more').on('click', function() {
$(this).css('display','none');//押したボタンを非表示
$(this).next('.content').slideDown('slow');
$(this).nextAll('.more:first').css('display','block'); //次のボタンを表示
});
});

