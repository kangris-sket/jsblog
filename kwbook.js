//Cloak link

//<![CDATA[
var key = window.location.href.split("book/")[1].replace("/","")
var urls={
 //Your Affiliate is http://example.com/go/fb or http://example.blogspot.com/go/fb
 'book':'https://www.google.com',
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
