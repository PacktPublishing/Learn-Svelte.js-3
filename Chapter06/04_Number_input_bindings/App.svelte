<script>
	let price;
	let discount;
</script>
<h3>Discount Calculator</h3>
<label>Price</label>
<input type="number" id="price" bind:value={price}>
<label>Discount</label>
<input type="number" id="discount" bind:value={discount}>
{#if price && discount}
<h4>After discount, You have to pay {price - (price*(discount/100))}</h4>
{/if}
