import Cookies from 'js-cookie'

export const useCookie = (name: string) => {
  const getCookie = () => Cookies.get(name)
  const setCookie = (value: string, options?: Cookies.CookieAttributes) =>
    Cookies.set(name, value, options)
  const removeCookie = (options?: Cookies.CookieAttributes) =>
    Cookies.remove(name, options)

  return { getCookie, setCookie, removeCookie }
}