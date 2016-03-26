;
(function ($) {

    $(function () {

        /*history页面渲染*/

        $.getJSON('data.json', function (data) {
            var historyHtml = "";
            $.each(data.history, function (i, item) {
                historyHtml += "<li> <h1>" + item.questions + "</h1><p><span>答:</span>" + item.answer + "</p></li>";

            });
            $("#data").html(historyHtml);

        });
        //点标题进入题的页面
        $(".main1 ul").on('click', "li h1", function () {
            var tt = $(this).html();
            pp = $(this).parents("li").find("p").html();
            $(".second").show();
            $(".first").hide();
            $h1 = $('<h1></h1>');
            $footer = $('<div class="sefooter"><span>添加收藏:</span><span class="fa fa-star"></span></div>')
            $p = $('<p></p>');
            $h1.html(tt);
            $p.html(pp);
            $(".second section").append($h1, $p, $footer);

        });
        //返回
        $(".second").on('click', '.ti-back', function () {
                $(".second").hide();
                $(".first").show();
                $(".second section").empty();
            })
            //搜题
        $(".txt").on("change", function () {
            sou();
        });
        $("#sou").on("click", function () {
            sou();
        });

        function sou() {
            var val = $(".txt").val();
            historyHtml = "";
            $.getJSON('data.json', function (data) {
                $.each(data.info, function (i, item) {
                    if (item.questions.indexOf(val) >= 0 && item.answer.indexOf(val) >= 0) {
                        historyHtml += "<li> <h1>" + item.questions + "</h1><p><span>答:</span>" + item.answer + "</p></li>";
                    }

                });
                $("#data").html(historyHtml);
                $("#main1 #num").remove();

            });
        }
        //点星星
        $(".second").on('click', '.fa-star', function () {
            if ($(this).hasClass("la")) {
                $(this).removeClass("la");
            } else {
                $(this).addClass("la");
            }
        });
        //底部导航
        /*$(".navH").on('click', function () {
                $(this).hide();
                $(".navW").removeClass("scl").addClass("extend");
            })
            $(".navW").on('click', 'li:eq(0)', function () {
                    $(".navW").addClass("scl");
                    $(".navH").show();
        });*/
        //底部导航
        $(".navH").on('click', function () {
            $(this).hide();
            $(".navW ul").show();
        });
        $(".remain").on('click', function () {
            $(".navW ul").hide();
            $(".navH").show();
        });

    });

})(jQuery);