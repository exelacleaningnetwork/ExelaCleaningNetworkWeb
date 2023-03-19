$(document).ready(()=>{
    $('#servicetype').on('change', (event)=>{
       $(".hidable-section").hide();
       $(`.hidable-section[data-target='${event.target.value}']`).show();
    });
});
