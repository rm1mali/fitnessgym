document.getElementById('gohome').addEventListener('click',function(){
    document.getElementById('contactid').style.display='none';
    document.getElementById('payid').style.display='none';
    document.getElementById('reg-id').style.display='none';
 document.getElementById('fistview').style.display='inline';
//  document.getElementById('secondview').style.display='none';
});

document.getElementById('gocontact').addEventListener('click',function(){
    document.getElementById('payid').style.display= 'none';
    document.getElementById('fistview').style.display='none';
    document.getElementById('reg-id').style.display='none';
    document.getElementById('contactid').style.display= 'inline';
//  document.getElementById('secondview').style.display='none';

});
document.getElementById('goreg').addEventListener('click',function(){
    document.getElementById('reg-id').style.display='inline';
    document.getElementById('payid').style.display='none';
 document.getElementById('fistview').style.display='none';
 document.getElementById('contactid').style.display='none';
//  document.getElementById('secondview').style.display='none';
});

// script for centerimg
