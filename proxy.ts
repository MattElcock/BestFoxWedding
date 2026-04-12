import { createProxy } from "next-i18next/proxy";
import i18nConfig from "./i18n.config";
import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  /*
   * Check if user has already chosen a language.
   * If not, redirect them to make a choice.
   */
  const cookies = request.cookies;
  const next = request.nextUrl.pathname.replace("/en", "").replace("/cy", "");

  const isOnSelectLanguagePage =
    request.nextUrl.pathname === "/en/select-language";
  const chosenLanguage = cookies.get("SHOWN_CHOOSE_LANGUAGE_PAGE");

  if (!chosenLanguage && !isOnSelectLanguagePage) {
    return NextResponse.redirect(
      new URL(`/en/select-language?next=${next}`, request.url),
    );
  }

  return createProxy(i18nConfig)(request);
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};
