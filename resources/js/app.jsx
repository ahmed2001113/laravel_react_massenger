import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});

InertiaProgress.init({ color: '#4B5563' });
// ده الكود الايفينتر ليسينر برودكاست
// بتكتب اسم القناه بعد كده اسم الايفينت
// هنغير كلمه شانيل لكلمه برايفيت علشان غيرناها في الايفينت

// Echo.private(`messenger`)
// غيرنا الكود الي فيوق بالكود الي تحت 1 تدل علي الراسل و 2 العكس 
Echo.private(`messenger.1.2`)
    .listen('MessageSent', (e) => {
        console.log(e);
        console.log(e.message);
    });



// هنغير كلمه شات لاسم الايفينت بتاعنا
// من الدرس 8 هنلغي الكود ده
// Echo.join(`group_chat.1`)
//     .here((users) => {
//         console.log(users);
//     })
//     .joining((user) => {
//         console.log(user.name);
//     })
//     .leaving((user) => {
//         console.log(user.name);
//     })
//     // هنضيف الكود ده
//     .listen('GroupChatMessage', (e) => {
//         console.log(e);
//     })
//     .error((error) => {
//         console.error(error);
//     });
