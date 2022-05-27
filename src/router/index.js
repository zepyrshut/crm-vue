import { createRouter, createWebHashHistory } from "vue-router";

import DashboardView from "@/views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/components/content/Dashboard.vue"),
      },
      {
        path: "/catalog",
        name: "catalog",
        component: () => import("@/components/content/catalog/Catalog.vue"),
      },
      {
        path: "/properties",
        name: "properties",
        component: () =>
          import("@/components/content/catalog/CatalogProperties.vue"),
      },
      {
        path: "/item/:id",
        name: "item",
        component: () => import("@/components/content/catalog/Item.vue"),
      },
      {
        path: "/item/new",
        name: "item-new",
        component: () => import("@/components/content/catalog/NewItem.vue"),
      },
      {
        path: "/customers",
        name: "customer-list",
        component: () =>
          import("@/components/content/customer/CustomersList.vue"),
      },
      {
        path: "/customer/:id",
        name: "customer",
        component: () => import("@/components/content/customer/Customer.vue"),
      },
      {
        path: "/orders",
        name: "order-list",
        component: () => import("@/components/content/order/OrdersList.vue"),
      },
      {
        path: "/order/:id",
        name: "order",
        component: () => import("@/components/content/order/Order.vue"),
      },
      {
        path: "/invoices",
        name: "invoice-list",
        component: () =>
          import("@/components/content/invoice/InvoicesList.vue"),
      },
      {
        path: "/invoice/:id",
        name: "invoice",
        component: () => import("@/components/content/invoice/Invoice.vue"),
      },
      {
        path: "/stats",
        name: "stats",
        component: () => import("@/components/content/stats/Stats.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
