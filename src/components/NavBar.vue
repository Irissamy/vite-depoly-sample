<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Iris & Amy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">shopping</a>
                        <ul class="dropdown-menu">
                            <li><RouterLink to="/shopping/sweetItem" class="dropdown-item">甜甜的東西</RouterLink></li>
                            <li><RouterLink to="/shopping/furnitureItem" class="dropdown-item">舒服的家具</RouterLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="javascripts:;">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="nav-item dropdown pe-3">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                    <ul class="dropdown-menu">
                        <li><RouterLink to="/loginView" class="dropdown-item">使用者登入</RouterLink></li>
                        <li><RouterLink to="/loginView" class="dropdown-item">管理者登入</RouterLink></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="javascripts:;">login out</a></li>
                    </ul>
                </div>
                <div class="d-flex pe-3">
                    <span>ShoppingCart</span>
                    <i class="bi bi-cart3"></i>
                    <span class="ms-2 badge rounded-pill bg-danger text-white">{{ getCartList.carts.length }}</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import cartStore from '@/store/cartStore';
import { mapState } from 'pinia';

export default {
    name:'NavBar',
    components: {
        RouterLink
    },
    computed: {
        ...mapState(cartStore,['getCartList'])
    }
}
</script>
