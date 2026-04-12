import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const page = request.nextUrl.pathname;

  if (!page.endsWith("/choose-locale")) {
    const shownChooseLanguagePage = request.cookies.get(
      "SHOWN_CHOOSE_LANGUAGE_PAGE",
    );

    if (!shownChooseLanguagePage) {
      const locale =
        request.cookies.get("NEXT_LOCALE")?.value || routing.defaultLocale;
      const url = request.nextUrl.clone();

      url.pathname = `/${locale}/choose-locale`;
      return NextResponse.redirect(url);
    }
  }

  return createMiddleware(routing)(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
