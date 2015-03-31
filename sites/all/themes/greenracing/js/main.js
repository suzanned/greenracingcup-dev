

$(document).ready(function () { 
  var Slider = (function() {

      function Slider(config) {

        this.current  = null;        
        this._timer   = null;
        this._timeout = config.timeout;
        this._speed   = config.speed;        
        
        this.$slides  = $( config.selectors.slides );
        this.$nubs    = $( config.selectors.nubs   );
        this.$hover   = $( config.selectors.hover  );

        this._length  = this.$slides.length;

        this._goToSlide(config.initial);
        this._startTimer();
        this._listen();

      }

      Slider.prototype._listen = function(){
        var that = this;

        this.$nubs.on('click', function(){
          that._goToSlide( that.$nubs.index(this) );
        });

        this.$hover.on('mouseenter', function(){ that._stopTimer();  });
        this.$hover.on('mouseleave', function(){ that._startTimer(); });

      };

      Slider.prototype._stopTimer = function(){
        clearTimeout(this._timer);
      };

      Slider.prototype._startTimer = function() {
        var that = this;        

        this._stopTimer();
        this._timer = setTimeout(function(){
        
          that.next();
          that._startTimer();
        
        }, this._timeout);

      };

      Slider.prototype._goToSlide = function(index){
        if(this.current == index){ return; }
        
        this.current = index;

        this.$nubs
          .removeClass( 'current')
          .eq(index)
          .addClass(    'current');

        this.$slides
          .fadeOut(     this._speed)
          .eq(index)
          .fadeIn(      this._speed);

      };

      Slider.prototype.next = function(){
        this._goToSlide(  (this.current + 1) % this._length  );        
      };

      return Slider;

    })();

    new Slider({
      initial   : 0,
      timeout   : 30000,
      speed     : 1100,
      selectors : {
        slides    : '#main-slider figure',
        nubs      : '#slider-nubs li',
        hover     : '#main-slider'
      }
    });

    $("#st-trigger-effects > button").click(function () {
        var $this = $('#st-container');
        if ($this.hasClass('st-menu-open')) {
            $this.removeClass('st-menu-open');
           
        } else {
            $this.addClass('st-menu-open');
        }
        return false;
    });
    
    
    $('nav li:last, .items:last').addClass('last');
    
    





});

