$( () => {

///////////////////////// YEAR 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const $container = $('#container');
  const $h1 = $('<h1>');
  $h1.text('Hogwarts');
  $container.append($h1);

///////////////////////// YEAR 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\
  $('<h2>').text('Nate Pappenhagen').appendTo($('body'));
  $('<h3>').text('Gryffindor').appendTo($('body'));
  $('<h4>').text('Reina').addClass('dog').appendTo($('body'));
  $('<h4>').text('Birch Wand With Phoenix Core').appendTo($('body'));

///////////////////////// YEAR 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const $ul = $('<ul>').attr('storage','trunk');
  $('<li>').text('butter beer').appendTo($ul);
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul);
  $('<li>').text('magic map').addClass('secret').appendTo($ul);
  $('<li>').text('time turner').addClass('secret').appendTo($ul);
  $('<li>').text('leash').addClass('dog').appendTo($ul);
  $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans').appendTo($ul);
  $container.append($ul);

///////////////////////// YEAR 4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const $table = $('<table>');
  const $h5 = $('<h5>').text('Spring 2017');
  const $thead = $('<thead>');

  $('<th>').text('Day').appendTo($thead);
  $('<th>').text('Classes').appendTo($thead);


  $table.append($thead);
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));
  $container.append($h5).append($table);

///////////////////////// YEAR 5 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const $wand = $('h4:contains("Birch")');
        $wand.detach().appendTo('.dog');
        $wand.text('calcified rainbow beam core with Pachyrhinosaurus tooth inlay').css('color','indigo').addClass('wand');


  $('li:contains("butter beer")').remove();

  $('h4.dog').appendTo($('body'));
  $('h4').eq(0).before($('h4.dog'));


///////////////////////// YEAR 6 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

  $('.secret').hide('slow').delay(1500).show('slow');
  $('li.dog').addClass('cabbage');
  $('li.dog').removeClass('cabbage');

///////////////////////// YEAR 7 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

const makeBeerForWeek = () => {
  for (let i = 0; i < 7; i++){
      $ul.prepend($('<li>').text('Butter beer'));
      }
    };

  $h5.text('Fall 2018');
  makeBeerForWeek();
  $ul.attr('storage','chest');

});
