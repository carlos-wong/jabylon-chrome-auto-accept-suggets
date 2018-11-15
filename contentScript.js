console.log('carlos contonte script load:'+window.location.href);
// console.log('debug select',$x("//img"));
//*[@id="review-tool-table"]/tbody/tr/td[2]/i

var jpgLinks    = document.evaluate (
  '//*[@id="review-tool-table"]/tbody/tr/td[2]/i',
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

if(jpgLinks.snapshotItem(0)){
  console.log('jplinks:',jpgLinks.snapshotItem(0).click());
}


setTimeout(()=>{
  var jpgLinks    = document.evaluate (
  '//*[@id="next"]',
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

console.log('jplinks:',jpgLinks.snapshotItem(0).click());

}, 1000);
