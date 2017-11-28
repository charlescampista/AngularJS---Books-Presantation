app.controller('MainController',['$scope', function($scope){
  $scope.title = 'Here goes some good readings for knoledge expanding, and life\'s perspective increase. I hope you enjoy it!';

  $scope.promo = 'the books shown here can be found in a good price on amazon web site.';
  $scope.products = [
    									{	name: 'The Book of Trees',
                        price: 19,
                        pubdate: new Date('2014', '03','08'),
                        cover: 'img/TheBookOfTrees_omote.jpg',
                      	likes: 0,
                      	dislikes: 0,
                        description: 'Our critically acclaimed bestseller Visual Complexity was the first in-depth examination of the burgeoning field of information visualization. Particularly noteworthy are the numerous historical examples of past efforts to make sense of complex systems of information. In this new companion volume, The Book of Trees, data viz expert Manuel Lima examines the more than eight hundred year history of the tree diagram, from its roots in the illuminated manuscripts of medieval monasteries to its current resurgence as an elegant means of visualization. Lima presents two hundred intricately detailed tree diagram illustrations on a remarkable variety of subjects, from some of the earliest known examples from ancient Mesopotamia to the manuscripts of medieval monasteries to contributions by leading contemporary designers. A timeline of capsule biographies on key figures in the development of the tree diagram rounds out this one-of-a-kind visual compendium.'},

   										{ name: 'Program or be Programmed',
                      	price: 8,
                      	pubdate: new Date('2013', '08', '01'),
                      	cover: 'img/Program_or_be_programmed.jpg',
                      	likes: 0,
                      	dislikes: 0,
                        description: 'The debate over whether the Net is good or bad for us fills the airwaves and the blogosphere. But for all the heat of claim and counter-claim, the argument is essentially beside the point: It’s here; it’s everywhere. The real question is, do we direct technology, or do we let ourselves be directed by it and those who have mastered it? “Choose the former,” writes Rushkoff, “and you gain access to the control panel of civilization. Choose the latter, and it could be the last real choice you get to make.”'
                        +
                        'In ten chapters, composed of ten “commands” accompanied by original illustrations from comic artist Leland Purvis, Rushkoff provides cyber enthusiasts and technophobes alike with the guidelines to navigate this new universe.'
                        +
                        'In this spirited, accessible poetics of new media, Rushkoff picks up where Marshall McLuhan left off, helping readers come to recognize programming as the new literacy of the digital age––and as a template through which to see beyond social conventions and power structures that have vexed us for centuries. This is a friendly little book with a big and actionable message.'},



      									{	name: 'Who Moved My Cheese?',
                        	price: 14.47,
                        	cover: 'img/who-moved-my-cheese.jpg',
                        	likes: 0,
                        	dislikes: 0,
                          description: 'Written by Spencer Johnson, coauthor of The One Minute Manager, this enlightening and amusing story illustrates the vital importance of being able to deal with unexpected change. Who Moved My Cheese? is often distributed by managers to employees as a motivational tool, but the lessons it teaches can benefit literally anyone, young or old, rich or poor, looking for less stress and more success in every aspect of work and life.'},


                          { name: 'Rich dad Poor Dad',
                          	price: 14.03,
                          	cover: 'img/rich-dad-poor-dad.jpg',
                          	likes: 0,
                          	dislikes: 0,
                            description: 'Personal finance author and lecturer Robert T. Kiyosaki developed his unique economic perspective from two very different influences - his two fathers.'
                                          +'One father Robert\'s real father was a highly educated man but fiscally poor.'
                                          +' The other father was the father of Robert\'s best friend - that Dad was an eighth-grade drop-out who became a self-made multi-millionaire.'
                                          +' The lifelong monetary problems experienced by his poor dad pounded home the counterpoint communicated by his rich dad.'
                                          +' Taking that message to heart, Kiyosaki was able to retire at 47.' }
  									]
  $scope.plusOne = function(index){
    $scope.products[index].likes += 1;
  }

  $scope.minusOne = function(index){
    $scope.products[index].dislikes += 1;
  }

}]);
