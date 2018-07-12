//</head>

<script language='javascript'>

//Blogger Affiliate Link Shortener

//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
 //Your Affiliate is http://example.com/go/fb or http://example.blogspot.com/go/fb
 'product1':"Your Affiliate link",
 'product2':"Your Affiliate link",
}
if(key){
 if(urls[key]){
 window.location.href=urls[key]
 }else{
 document.write("'"+key+"' not found :(");
 }
}
//]]>
</script>
