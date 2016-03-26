;
(function ($) {

    $(function () {
        //创建数据库
        var db = openDatabase('info', "", "这是一个测试库", 2 * 1024 * 1024);
        //创建数据表
        db.transaction(function (tx) {
            tx.executeSql("create table if not exists history(id unique,question text,answer text,time text)");
        });

        //插入历史记录
        /*   $("#data").on('click', 'li h1', function () {

               var questionV = $(this).parent().find('h1').html(),
                   answerV = $(this).parent().find('p').html();

           })*/

        /*    function saveH(questionV, answerV, time) {
            db.transaction(function (tx) {
                tx.executeSql("insert into history(question,answer,time) values(?,?,?)", [questionV, answerV, time], function (tx, res) {

                    alert("已加入历史记录");
                }, function (tx, err) {
                    alert("1")
                });

            });


        }
*/
        //删除历史记录
        /*  function deleteH(id) {
            db.transaction(function (tx) {
                tx.executeSql("delete from history where question=?", [id], function (tx, res) {

                    alert("删除历史记录");
                })

            })

        }

*/



        /*取消收藏*/
        /* var date = new Date();
         $(".Test_question_parsing ul").on('click', '.sefooter .fa-star', function () {
             var selectColor = $(this);
             var questionV = $(this).parents("ul").find("h1").html(),
                 answerV = $(this).parents("ul").find("p").html(),
                 id = $(this).parents(".main").find(".serial_number").html(),
                 time = date.toLocaleDateString();
             console.log(id);
             if (selectColor.hasClass("selG")) {
                 selectColor.removeClass("selG").addClass("selL");
                 saveData(questionV, answerV, time);
             } else {
                 selectColor.removeClass("selL").addClass("selG");
                 deleteData(questionV);
             }
         })*/

    })

})(jQuery);