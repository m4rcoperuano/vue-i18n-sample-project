<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <p>{{ $t('content.whatThisIsFor') }}</p>

    <div class="form-group">
      <label>{{ $t('labels.username') }}</label>
      <input v-model='username' type="text" name="username">
    </div>

    <div class="form-group">
      <label>{{ $t('labels.password') }}</label>
      <input v-model='password' type="password" name="password">
    </div>
    
    <label v-if='this.password && isBelowMinimumCharacterLengthForPassword' class="error">
        {{ $t('errorMessages.minPasswordCharacterLength', { count: this.password.length }) }}
    </label><br/>

    <div>
        <button>{{ $t('buttons.submit') }}</button>
    </div>

  </div>
</template>

<script>
export default {
  i18nOptions: {
    namespaces: "_common",
    keyPrefix: "pages.login"
  },
  data() {
      return {
          username: '',
          password: null,
          numberOfTimesButtonPressed: 0
      }
  },
  computed: {
      isBelowMinimumCharacterLengthForPassword() {
          return this.password.length < 6;
      }
  }
};
</script>
