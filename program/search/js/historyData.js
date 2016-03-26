;
(function ($) {

    $(function () {

        /*history页面渲染*/

        $.getJSON('data.json', function (data) {
            var historyHtml = "";
            $.each(data.history, function (i, item) {
                historyHtml += "<li> <aside class='asideNum'> <span class='serial_number'>" + (i + 1) + ": </span> <a href = '#' class='select fa fa-trash-o star_light' id='select'></a></aside><h1>" + item.questions + "</h1><p><span>答:</span>" + item.answer + "</p></li>";

            })
            $(".The_history_paper ul").html(historyHtml);

            /*分页*/
            $(".The_history_paper ul").children().css({
                "display": "none"
            });
            $(".The_history_paper ul").children().slice(0, 5).css({
                "display": "block"
            });
            var totalrecords = $(".The_history_paper ul li").length,
                recordsperpage = 5;




            $(document).ready(function () {

                $('#num').smartpaginator({
                    totalrecords: totalrecords,
                    recordsperpage: recordsperpage,
                    length: 5,
                    next: 'Next',
                    prev: 'Prev',
                    first: 'First',
                    last: 'Last',
                    theme: 'red',
                    controlsalways: true,
                    onchange: function (newPage) {

                        var num = newPage;
                        var showStart = (num - 1) * recordsperpage,
                            showEnd = num * recordsperpage,
                            nums = showEnd - showStart,
                            len = $(".lists li").length;
                        $(".The_history_paper .lists").find("li").hide();
                        $(".The_history_paper .lists").find("li").slice(showStart, showEnd).show();

                        /*var mainH = parseInt(len / recordsperpage) + 1,
                            lastnum = len - (mainH - 1) * recordsperpage,
                            lastH = lastnum * 4.8 + 2.6;
                        console.log(newPage);
                        console.log(lastnum);
                        console.log(lastH);
                        if (newPage == mainH) {
                            $(".contain").css({
                                "height": lastH + "rem"
                            })
                        } else {
                            $(".contain").css({
                                "height": "98.6rem"
                            })
                        }*/

                    }


                });



            });

            /*编辑*/

            $(".The_history_paper ul").on('click', "li .select", function () {
                var sel = $(this);
                $(this).parents("li").remove();

            })
            $(".all_remove").on('click', function () {
                $(".The_history_paper ul").find("li").remove();
                $("#num").remove();
                $(".edit").hide();

            })
            $(".Test_question_parsing ul").on('click', '.sefooter .fa-star', function () {
                    var selectColor = $(this);
                    if (selectColor.hasClass("selG")) {
                        selectColor.removeClass("selG").addClass("selL");

                    } else {
                        selectColor.removeClass("selL").addClass("selG");
                    }
                })
                /*tab切换*/
            var w = document.documentElement.clientWidth;

            function Tab(headernav, hl, Left, addc, rec, W, Right, remc, addC) {
                $(headernav).html(hl);
                $(Left).addClass(addc).removeClass(rec);
                $(Right).removeClass(remc).addClass(addC);
                $(".main").css({
                    "left": W + "px",
                    "-webkit-transition": "left .5s"
                })

            }
            $(".The_history_paper ul").on('click', "li h1", function () {
                var ques = $(this).parents("li").find("h1").html();
                var asw = $(this).parents("li").find("h1").html();
                $(".edit").hide();
                $(".select").hide();

                $(".Test_question_parsing ul").html("<h1><span>题目：</span>" + ques + "</h1><p><span>答：</span>" + asw + "</p><div class='sefooter'><span>添加收藏:</span><span class='fa fa-star selG'></span></div>");


                Tab(".headernav h1", "试题解析", ".headernav a:eq(0)", "fa-chevron-left", "", -w, ".headernav a:eq(1)", "fa-edit", "")

            })
            $(".headernav").on('click', ".fa-chevron-left", function () {
                Tab(".headernav h1", "历史记录", ".headernav a:eq(0)", "", "fa-chevron-left", 0, ".headernav a:eq(1)", "", "fa-edit")
            })
            $(".fa-edit").on('click', function () {
                $(".edit").slideDown(200);
                $(".select").show();
            });
            $(".cancel").on('click', function () {
                    $(".edit").slideUp(200);
                    $(".select").hide();
                })
                /*底部导航*/
            $(".navH").on('click', function () {
                $(this).hide();
                $(".navW").removeClass("scl").addClass("extend");
            })
            $(".navW").on('click', 'li:eq(0)', function () {
                $(".navW").addClass("scl");
                $(".navH").show();
            })


        })

    })

})(jQuery);