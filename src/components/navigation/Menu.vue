<template>
    <div>
        <ul>
            <li :class="selectedMenuItem === 'home' ? 'active' : ''">
                <a href="javascript:;" @click="$emit('menu-item-changed', 'home')">{{ $t('nav.home') }}</a>
            </li>
            <li :class="selectedMenuItem === 'login' ? 'active' : ''">
                <a href="javascript:;" @click="$emit('menu-item-changed', 'login')">{{ $t('nav.login') }}</a>
            </li>
            <li :class="selectedMenuItem === 'contact' ? 'active' : ''">
                <a href="javascript:;" @click="$emit('menu-item-changed', 'contact')">{{ $t('nav.contact') }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        i18nOptions: {
            namespaces: 'navigation'
        },
        props: {
            selectedMenuItem: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    ul li {
        display:inline-block;
        list-style-type: none;
    }
    ul li a {
        margin:1px;
        padding:8px 15px;
        color:#333;
        text-decoration: none;
    }

    ul li a:hover {
        background-color:#EEE;
    }

    ul li.active a {
        background-color:#EEE;
        cursor:default;
    }
</style>