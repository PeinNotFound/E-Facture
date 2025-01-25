import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { MagnifyingGlass, Bell, List, Browsers, CheckSquare, Swap, FileText, Globe, ClipboardText, Lightning, FireSimple, File, Drop, CaretDown, CaretRight } from 'phosphor-react';
import Main from './Main';
// import './../../css/style.css';

export default function Dashboard({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />
            <Main/>
        </AuthenticatedLayout>
    );
}
