function epaule() 
{
 	var ep = document.getElementById('tepaule');
      
      if(ep.style.display == 'block') 
    {
        ep.style.display = 'none';
    } 
      else 
    {
        ep.style.display = 'block';
     }
}


function coude() 
{
 	var cd = document.getElementById('tcoude');
      
      if(cd.style.display == 'block') 
    {
        cd.style.display = 'none';
    } 
      else 
    {
        cd.style.display = 'block';
     }
}

function poignet()
{
 	var tp = document.getElementById('tpoignet');
      
      if (tp.style.display == 'block')
    {
        tp.style.display = 'none';
    } 
      else 
    {
        tp.style.display = 'block';
     }
}


function hanche() 
{
 	var ha = document.getElementById('thanche');
      
      if(ha.style.display == 'block') 
    {
        ha.style.display = 'none';
    } 
      else 
    {
        ha.style.display = 'block';
     }
}

function genoux() 
{
 	var ge = document.getElementById('tgenoux');
      
      if(ge.style.display == 'block') 
    {
        ge.style.display = 'none';
    } 
      else 
    {
        ge.style.display = 'block';
     }
}

function cheville() 
{
 	var tc = document.getElementById('tcheville');
      
      if(tc.style.display == 'block') 
    {
        tc.style.display = 'none';
    } 
      else 
    {
        tc.style.display = 'block';
     }
}

$('.rond').mouseover(function() {
  $('.rond').each(function() {
    $(this).toggleClass("active");
  });
});
$('.rond').mouseout(function() {
  $('.rond').each(function() {
    $(this).removeClass("active");
  });
});