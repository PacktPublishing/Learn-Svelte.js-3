<script>
  let email = "";
  let password = "";
  let isSuccess = false;
  let errors = {};
  let validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const handleSubmit = () => {
    errors = {};
    if (email.length === 0) {
      errors.email = "Please enter your email.";
    } else if (!validEmailRegex.test(email)) {
      errors.email = "Please enter valid email.";
    }
    if (password.length === 0) {
      errors.password = "Please enter your password.";
    } else if (password.length > 6 || password.length < 6) {
      errors.password = "Password must be of 6 characters.";
    }
    if (Object.keys(errors).length === 0) {
      isSuccess = true;
      console.log(email);
      console.log(password);
    }
  };
</script>

<style>
  form {
    background: #fff;
    padding: 50px;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.58);
  }

  input {
    border: none;
    border-bottom: 1px solid #ccc;
    transition: all 300ms ease-in-out;
    width: 100%;
  }
  input:focus {
    outline: 0;
    border-bottom: 1px solid #666;
  }
  button {
    margin-top: 20px;
    background: #ff3e00;
    color: white;
    padding: 10px 0;
    width: 200px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    transform: translateY(-2.5px);
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
  }
  .field-control {
    margin-bottom: 20px;
  }
  .error {
    color: red;
  }
  .success {
    font-size: 24px;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  {#if isSuccess}
    <div class="success">
      <h4>Welcome {email}</h4>
      You've been successfully logged in.
    </div>
  {:else}
    <h3>Login Form</h3>
    <div class="field-control">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        bind:value={email} />
      {#if errors && errors.email}
        <div class="error">{errors.email}</div>
      {/if}
    </div>
    <div class="field-control">
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        bind:value={password} />
      {#if errors && errors.password}
        <div class="error">{errors.password}</div>
      {/if}
    </div>
    <center>
      <button type="submit">LOGIN</button>
    </center>
  {/if}
</form>
