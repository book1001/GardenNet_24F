// Menu Buttons ------------------------------------------------

// $('.row1').addClass('show');
$('.menu-btn#row1').addClass('menu-btn-upsidedown');

$(".menu-btn").click(function (e) {
    e.preventDefault();

    $('[class^=row]').not($('.'+this.id)).hide();

    var btns = $(".menu-btn");
    for(var i=0; i<btns.length; i++) {
      var btn = btns.eq(i);
      if(btn[0] !== $(this)[0]) {
        btn.removeClass("menu-btn-upsidedown");
        // $('.row1').addClass('show');
      }
    }

    if($(this).hasClass("menu-btn-upsidedown")) {
      $(this).removeClass("menu-btn-upsidedown");
      // $('.row1').removeClass('show');
    }
    else {
      $(this).addClass("menu-btn-upsidedown");
      // $('.row1').removeClass('show');
    }

    $('.'+this.id).slideToggle(0);
});


function menuProjects() {
  document.getElementById("main")[0].style.display = "none";
}



// Responsive: Syllabus-1 ------------------------------------------------

function s_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    s_1_Tablet()
  } else { // PC: 601px ~
    s_1_PC()
  }
}

function s_1_Tablet() {
  document.getElementById("syllabus_1").style.display = "block";
  document.getElementById("syllabus_2").style.display = "none";
  document.getElementById("btn_s_1").style.color = "#ffffff";
  document.getElementById("btn_s_2").style.color = "#000000";
}

function s_1_PC() {
  document.getElementById("syllabus_1").style.display = "block";
  document.getElementById("syllabus_2").style.display = "block";
  document.getElementById("btn_s_1").style.color = "#ffffff";
  document.getElementById("btn_s_2").style.color = "#000000";
}



// Responsive: Syllabus-2 ------------------------------------------------

function s_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    s_2_Tablet()
  } else { // PC: 601px ~
    s_2_PC()
  }
}

function s_2_Tablet() {
  document.getElementById("syllabus_1").style.display = "none";
  document.getElementById("syllabus_2").style.display = "block";
  document.getElementById("btn_s_1").style.color = "#000000";
  document.getElementById("btn_s_2").style.color = "#ffffff";
}

function s_2_PC() {
  document.getElementById("syllabus_1").style.display = "block";
  document.getElementById("syllabus_2").style.display = "block";
  document.getElementById("btn_s_1").style.color = "#000000";
  document.getElementById("btn_s_2").style.color = "#ffffff";
}



// Responsive: P1-1 ------------------------------------------------

function p1_magicSpells_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p1_magicSpells_1_Tablet()
  } else { // PC: 601px ~
    p1_magicSpells_1_PC()
  }
}

function p1_magicSpells_1_Tablet() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "none";
  document.getElementById("btn_p1_1").style.color = "#ffffff";
  document.getElementById("btn_p1_2").style.color = "#000000";
}

function p1_magicSpells_1_PC() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#ffffff";
  document.getElementById("btn_p1_2").style.color = "#000000";
}


// Responsive: P1-2 ------------------------------------------------

function p1_magicSpells_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p1_magicSpells_2_Tablet()
  } else { // PC: 601px ~
    p1_magicSpells_2_PC()
  }
}

function p1_magicSpells_2_Tablet() {
  document.getElementById("p1_magicSpells_1").style.display = "none";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#000000";
  document.getElementById("btn_p1_2").style.color = "#ffffff";
}

function p1_magicSpells_2_PC() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#000000";
  document.getElementById("btn_p1_2").style.color = "#ffffff";
}


// Responsive: P2-1 ------------------------------------------------

function p2_infiniteFigures_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p2_infiniteFigures_1_Tablet()
  } else { // PC: 601px ~
    p2_infiniteFigures_1_PC()
  }
}

function p2_infiniteFigures_1_Tablet() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "none";
  document.getElementById("btn_p2_1").style.color = "#ffffff";
  document.getElementById("btn_p2_2").style.color = "#000000";
}

function p2_infiniteFigures_1_PC() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#ffffff";
  document.getElementById("btn_p2_2").style.color = "#000000";
}


// Responsive: P2-2 ------------------------------------------------

function p2_infiniteFigures_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p2_infiniteFigures_2_Tablet()
  } else { // PC: 601px ~
    p2_infiniteFigures_2_PC()
  }
}

function p2_infiniteFigures_2_Tablet() {
  document.getElementById("p2_infiniteFigures_1").style.display = "none";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#000000";
  document.getElementById("btn_p2_2").style.color = "#ffffff";
}

function p2_infiniteFigures_2_PC() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#000000";
  document.getElementById("btn_p2_2").style.color = "#ffffff";
}


// Responsive: P3-1 ------------------------------------------------

function p3_ghosts_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p3_ghosts_1_Tablet()
  } else { // PC: 601px ~
    p3_ghosts_1_PC()
  }
}

function p3_ghosts_1_Tablet() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "none";
  document.getElementById("btn_p3_1").style.color = "#ffffff";
  document.getElementById("btn_p3_2").style.color = "#000000";
}

function p3_ghosts_1_PC() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#ffffff";
  document.getElementById("btn_p3_2").style.color = "#000000";
}


// Responsive: P3-2 ------------------------------------------------

function p3_ghosts_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p3_ghosts_2_Tablet()
  } else { // PC: 601px ~
    p3_ghosts_2_PC()
  }
}

function p3_ghosts_2_Tablet() {
  document.getElementById("p3_ghosts_1").style.display = "none";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#000000";
  document.getElementById("btn_p3_2").style.color = "#ffffff";
}

function p3_ghosts_2_PC() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#000000";
  document.getElementById("btn_p3_2").style.color = "#ffffff";
}


// Responsive: P4-1 ------------------------------------------------

function p4_terra_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p4_terra_1_Tablet()
  } else { // PC: 601px ~
    p4_terra_1_PC()
  }
}

function p4_terra_1_Tablet() {
  document.getElementById("p4_terra_1").style.display = "block";
  document.getElementById("p4_terra_2").style.display = "none";
  document.getElementById("btn_p4_1").style.color = "#ffffff";
  document.getElementById("btn_p4_2").style.color = "#000000";
}

function p4_terra_1_PC() {
  document.getElementById("p4_terra_1").style.display = "block";
  document.getElementById("p4_terra_2").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#ffffff";
  document.getElementById("btn_p4_2").style.color = "#000000";
}


// Responsive: P4-2 ------------------------------------------------

function p4_terra_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p4_terra_2_Tablet()
  } else { // PC: 601px ~
    p4_terra_2_PC()
  }
}

function p4_terra_2_Tablet() {
  document.getElementById("p4_terra_1").style.display = "none";
  document.getElementById("p4_terra_2").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#000000";
  document.getElementById("btn_p4_2").style.color = "#ffffff";
}

function p4_terra_2_PC() {
  document.getElementById("p4_terra_1").style.display = "block";
  document.getElementById("p4_terra_2").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#000000";
  document.getElementById("btn_p4_2").style.color = "#ffffff";
}


// Responsive: Window Resize ------------------------------------------------

window.onresize = function(event) {
  s_1();
  s_2();
  p1_magicSpells_1();
  p1_magicSpells_2();
  p2_infiniteFigures_1();
  p2_infiniteFigures_2();
  p3_ghosts_1();
  p3_ghosts_2();
  p4_terra_1();
  p4_terra_2();
};
