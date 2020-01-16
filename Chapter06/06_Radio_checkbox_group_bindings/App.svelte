<script>
  let gender;
  let skills = [];
  let genderList = ["Male", "Female", "Other"];
  let skillList = ["Svelte", "Python", "React", "Angular"];
  let disable = true;
  $: if (gender && skills.length) {
    disable = false;
  }
</script>

<h4>Select you Gender</h4>
{#each genderList as list}
  <label>
    <input type="radio" name="gender" bind:group={gender} value={list} />
    {list}
  </label>
{/each}

<h4>Select you skills</h4>
{#each skillList as skill}
  <label>
    <input type="checkbox" bind:group={skills} value={skill} />
    {skill}
  </label>
{/each}
<button
  disabled={disable}
  on:click={() => alert(`Your Gender is ${gender} and your skills are ${skills}`)}>
  Submit
</button>
