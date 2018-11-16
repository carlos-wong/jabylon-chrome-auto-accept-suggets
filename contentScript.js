console.log('carlos contonte script load:'+window.location.href);
// console.log('debug select',$x("//img"));
//*[@id="review-tool-table"]/tbody/tr/td[2]/i



var reviewtab    = document.evaluate (
  '//*[@id="tooltabs"]/div/ul/li[3]/a',
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

if(reviewtab.snapshotItem(0)){
  reviewtab.snapshotItem(0).click();
  setTimeout(()=>{
    var jpgLinks    = document.evaluate (
      '//*[@id="review-tool-table"]/tbody/tr/td[2]/i',
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
    console.log('suggenst is:',jpgLinks.snapshotItem(jpgLinks.snapshotLength - 1));
    if(jpgLinks.snapshotItem(jpgLinks.snapshotLength - 1)){
      console.log('jplinks:',jpgLinks.snapshotItem(jpgLinks.snapshotLength -1).click());
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

  }, 1000);

}
else{
}

