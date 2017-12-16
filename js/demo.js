// 动画结束事件
   var animationEnd = (function() {
       var explorer = navigator.userAgent;
       if (~explorer.indexOf('WebKit')) {
   return 'webkitAnimationEnd';
   }
   return 'animationend';
   })();

   var container = $("#iSlider-wrapper");
   var swipe = Swipe(container);
   visualWidth = container.width();
   visualHeight = container.height();
   $(function() {
		
		    var snowflakeURl = [
		        'img/flow_1.png',
		        'img/flow_2.png',
		        'img/flow_3.png',
		        'img/flow_4.png',
		        'img/flow_5.png',
		        'img/flow_6.png'
		    ]
		
		    ///////
		    //飘雪花 //
		    ///////
		    function snowflake() {
		        // 雪花容器
		        var $flakeContainer = $('#snowflake');
		
		        // 随机六张图
		        function getImagesName() {
		            return snowflakeURl[[Math.floor(Math.random() * 6)]];
		        }
		        // 创建一个雪花元素
		        function createSnowBox() {
		            var url = getImagesName();
		            return $('<div class="snowbox" />').css({
		                'width': 15,
		                'height': 15,
		                'position': 'absolute',
		                'backgroundSize': 'cover',
		                'zIndex': 100000,
		                'top': '-41px',
		                'backgroundImage': 'url(' + url + ')'
		            }).addClass('snowRoll');
		        }
		        // 开始飘花
		        setInterval(function() {
		            // 运动的轨迹
		            var startPositionLeft = Math.random() * visualWidth - 100,
		                startOpacity    = 1,
		                endPositionTop  = visualHeight - 40,
		                endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
		                duration        = visualHeight * 10 + Math.random() * 5000;
		
		            // 随机透明度，不小于0.5
		            var randomStart = Math.random();
		            randomStart = randomStart < 0.5 ? startOpacity : randomStart;
		
		            // 创建一个雪花
		            var $flake = createSnowBox();
		
		            // 设计起点位置
		            $flake.css({
		                left: startPositionLeft,
		                opacity : randomStart
		            });
		
		            // 加入到容器
		            $flakeContainer.append($flake);
		
		            // 开始执行动画
		            $flake.transition({
		                top:endPositionTop,
		                left: endPositionLeft,
		                opacity: 0.3
		            }, duration, 'ease-out', function() {
		                $(this).remove() //结束后删除
		            });
		            
		        }, 100);
		    }
		
		
		    //开始
		    window.onload=function(){
		    	snowflake()
		    }
		
		})
