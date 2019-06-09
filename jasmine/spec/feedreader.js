'user strict'


$(function() {
  /*  the RSS
  * feeds definitions, the allFeeds variable in our application
*/
    describe('RSS Feeds',() => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  ensures it has a URL defined and that the URL is not empty.
         */
         it('URL is defined and it is not empty', ()=>{
           let j=0;
           while (j <allFeeds)
            j=j+1;
           {
          expect(allFeeds[j].url).toBeDefined();
          expect(allFeeds[j].url.length).not.toBe(0);


           }
         });


        /*  and ensures it has a name defined  and that the name is not empty.
         */
         it('Object  and name defined',()=>{
           let j=0;
           do {
           expect(allFeeds[j].name).toBeDefined();
           expect(allFeeds[j].name.length).not.toBe(0);
           j=j+1;
         }
         while (j<allFeeds);
         } )
    });


    /*  new test suite named "The menu" */
 // part is variable its store the element Selector
  let part =document.querySelector('body');
  // is variable its store the ClassName is menu-icon-link
  let menu=document.querySelector('.menu-icon-link');
  describe('The Menu ', function(){
    //  test the ensures the menu element is hidden by default.You'l' have to analyze the index.html page
it("Menu hidden by default ", () => {
  expect(part.classList.contains('menu-hidden')).toBe(true);
});
 /*  test that ensures the menu change visbility  when the menu icon is clicked. This test should have two exceptions:
     does the Menu display when
     * Clicked and does it hide when clicked again
  */
  it('Menu visbility & Hide ', () => {
    //  Event Menu
     menu.click();
     expect(part.classList.contains('menu-hidden')).not.toBe(true);
     menu.click();
     expect(part.classList.contains('menu-hidden')).toBe(true);
  });
});
/* New Test suite named 'Initial Entries'
  ** test the ensures when loadFeed
   * function is called and complete its work there is at least
   ** a single .entry elements within the .feed container.
   ** loadFeed() is asynchronous so this test will require
   ** the use of Jasmine's beforeEach  and  asynchronous done() function.
 */
 describe ('Initial Entries', () => {
   beforeEach((check)=>{
     loadFeed(0,() => {
       check();
     });

 });
it('entry element', () => {
  expect($('.feed .entry').length).toBeGreaterThan(0);
});
});
/* new test suite named 'New Feed Selection' */
describe('New Feed Selection',()=>{
  let testfeed;
  let oldfeed;
  /* test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
   Remember , loadFeed()is asynchronous.
  */
beforeEach((done)=>{
  loadFeed(0,()=> {
    oldfeed =$('.feed').html();
    loadFeed(1,() => {
      testfeed= $('.feed').html();
      done();
    });
  });
});
it ('if feeds are diffrent ',()=>{
  expect(oldfeed).not.toBe(testfeed);
  

});

});


}());
