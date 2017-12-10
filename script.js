const data_Array = [{
          id: 1,
          name: 'Marketing',
          date: '09/12/2017',
          start_time: '03:00 PM',
          end_time: '04:00 PM',
        }, {
          id: 2,
          name: 'Accounting',
          date: '09/12/2017',
          start_time: '03:00 PM',
          end_time: '04:00 PM',
        }, {
          id: 3,
          name: 'Programming',
          date: '09/12/2017',
          start_time: '03:00 PM',
          end_time: '04:00 PM',
        }];

$( document ).ready(function() {
  function getWorkshops(){
    const collection_container = $(".collection")
      // axios.get('/')
      //   .then(result => {
          for(let i = 0; i < data_Array.length; i++){
            let wsName = data_Array[i].name
            let wsDate = data_Array[i].date
            let htmlString = `<a href = '#modal1' class = 'collection-item black-text'>${wsName} ${wsDate}</a>`
            collection_container.append(htmlString)
//create modal for clickable list link

          }
          $('.modal').modal();
          $('select').material_select();
          $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
          });
          $('.timepicker').pickatime({
            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: true, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            vibrate: true, // vibrate the device when dragging clock hand
            aftershow: function() {}//Function for after opening timepicker
          });
          $('.timepicker').addClass('active')
        // });
  }
  getWorkshops();
});
