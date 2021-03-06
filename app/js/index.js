// toggle btn and change visible for pyramid lines
function toggleActiveBtn() {
    
    $(".choose-buttons .btn").on('click', function(){
        const len = $('.choose-buttons .btn.active').length,
            $this = $(this);
            
        if ( len < 5 || $this.hasClass('active') ) {
            $this.toggleClass("active");
            
            if ( $('.choose-buttons .btn.active').length == 0 ) {
                $('.js-count').removeClass('active');
                $('.js-chooseNumber').text('');
                $('.js-betInfoNumber').text(' ');
            }
            else if ( $('.choose-buttons .btn.active').length == 1 ) {
                $('.js-count').removeClass('active');
                $('.js-count').eq(0).addClass('active');
                $('.js-chooseNumber').text('X10');
                $('.js-betInfoNumber').text('Ваша ставка увеличится в 10 раз');
            }
            else if ( $('.choose-buttons .btn.active').length == 2 ) {
                $('.js-count').removeClass('active');
                $('.js-count').eq(1).addClass('active');
                $('.js-chooseNumber').text('X5');
                $('.js-betInfoNumber').text('Ваша ставка увеличится в 5 раз');
            }
            else if ( $('.choose-buttons .btn.active').length == 3 ) {
                $('.js-count').removeClass('active');
                $('.js-count').eq(2).addClass('active');
                $('.js-chooseNumber').text('X4');
                $('.js-betInfoNumber').text('Ваша ставка увеличится в 4 раза');
            }
            else if ( $('.choose-buttons .btn.active').length == 4 ) {
                $('.js-count').removeClass('active');
                $('.js-count').eq(3).addClass('active');
                $('.js-chooseNumber').text('X3');
                $('.js-betInfoNumber').text('Ваша ставка увеличится в 3 раза');
            }
            else if ( $('.choose-buttons .btn.active').length == 5 ) {
                $('.js-count').removeClass('active');
                $('.js-count').eq(4).addClass('active');
                $('.js-chooseNumber').text('X2');
                $('.js-betInfoNumber').text('Ваша ставка увеличится в 2 раза');
            }
        }

    });
}

toggleActiveBtn();



// neuro background
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});