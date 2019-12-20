<script>
  var today = new Date();  
</script>
<h4>ISO time format </h4>
<p>{today.toISOString()}</p>
<h4>UTC time format</h4>
<p>{today.toUTCString()}</p>
<h4>Locale date format</h4>
<p>{today.toLocaleString()}</p>
<h4>Current date (DD/MM/YYYY)</h4>
<p>{today.getDate()}/{today.getMonth()+1}/{today.getFullYear()}</p>
