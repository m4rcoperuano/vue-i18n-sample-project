<template>
    <div>
        <h1>{{ $t('title') }}</h1>
        <p>{{ $t('content.whatThisIsFor') }}</p>

        <form>
            <div class='form-group'>
                <label>{{ $t('labels.firstName') }}</label>
                <input type="text" name="first-name"/>
            </div>
            <div class='form-group'>
                <label>{{ $t('labels.lastName') }}</label>
                <input type="text" name="last-name"/>
            </div>
            <div class='form-group'>
                <label>{{ $t('labels.email') }}</label>
                <input type="text" name="email"/>
            </div>
            <div class='form-group'>
                <label>{{ $t('labels.phone') }}</label>
                <input type="text" name="numberOfMembersInOrg"/>
            </div>
            <br/>
            <button>{{ $t('buttons.submit') }}</button>
        </form>
    </div>
</template>

<script>
    export default {
        i18nOptions: {
            namespaces: '_common',
            keyPrefix: 'pages.contact'
        }
    }
</script>

<style scoped>

</style>