import { Router } from './router.js';

const router = new Router();
router.add("/", "./pages/Home/");
router.add("/universe", "./pages/Universe/");
router.add("/explorer", "./pages/Explorer/");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
