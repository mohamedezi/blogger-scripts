function redirectlink() {
    var vc1 = document.getElementById('c1').checked ? document.getElementById('c1').value : 0;
    var vc2 = document.getElementById('c2').checked ? document.getElementById('c2').value : 0;
    var vc3 = document.getElementById('c3').checked ? document.getElementById('c3').value : 0;

    var newUrl = "https://t.antj.link/277225/8273/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN";
    newUrl += "&c1=" + vc1 + "&c2=" + vc2 + "&c3=" + vc3;

    window.location = newUrl;
}
