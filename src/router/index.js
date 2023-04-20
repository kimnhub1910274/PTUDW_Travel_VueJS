import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
    // {
    //     path: "/",
    //     name: "contactbook",
    //     component: ContactBook,
    // },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/",
        name: "contact.create",
        component: () => import("@/views/ContactAdd.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/",
        name: "app",
        component:  () => import("@/components/App.vue"),
    },
    {
        path: "/home",
        name: "home",
        component:  () => import("@/components/Home.vue"),
    },
    {
        path: "/introduce",
        name: "introduce",
        component:  () => import("@/components/Introduce.vue"),
    },
    {
        path: "/news",
        name: "news",
        component:  () => import("@/components/News.vue"),
    },
    {
        path: "/town",
        name: "town",
        component:  () => import("@/components/Town.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;