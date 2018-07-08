//Cloak link

//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
 'fb':'https://www.facebook.com/wanovan', //Your Affiliate is http://example.com/go/fb or http://example.blogspot.com/go/fb
 'produk1':"Affiliate link anda",
 'produk2':"Affiliate link anda",
}
if(key){
 if(urls[key]){
 window.location.href=urls[key]
 }else{
 document.write("'"+key+"' not found :(");
 }
}
//]]>
