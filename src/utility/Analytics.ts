import { getAnalytics, logEvent } from '@firebase/analytics';
import { logError } from './Logger';

export function analyticPageView(page_title: string, page_path?: string) {
    if (process.env.NODE_ENV !== 'production') {
        return
    }
    try {
        const analytics = getAnalytics();
        logEvent(analytics, "page_view", {
            page_title: page_title,
            page_path: page_path,
        });
    }
    catch (err) {
        logError("analyticHome", err)
    }
}

export function analyticLogin(method: string) {
    if (process.env.NODE_ENV !== 'production') {
        return
    }
    try {
        const analytics = getAnalytics();
        logEvent(analytics, "login", {
            method: method
        });
    }
    catch (err) {
        logError("analyticLogin", err)
    }
}

export function analyticSignUp(method: string) {
    if (process.env.NODE_ENV !== 'production') {
        return
    }
    try {
        const analytics = getAnalytics();
        logEvent(analytics, "sign_up", {
            method: method
        });
    }
    catch (err) {
        logError("analyticSignUp", err)
    }
}