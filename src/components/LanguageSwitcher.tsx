import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from 'next/router'
import cookies from 'js-cookie';
import nextI18nextConfig from 'next-i18next.config'

const LanguageSwitcher = () => {
  const DEFAULT_LOCALE_FROM_CONFIG = nextI18nextConfig.i18n.defaultLocale;
  const router = useRouter();
  const defaultLocale = cookies.get('NEXT_LOCALE') || DEFAULT_LOCALE_FROM_CONFIG;
  
  const handleOptionSelect = (option: string) => {

    cookies.set('NEXT_LOCALE', option);

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: option },
    );
  };

  return (
    <Select onValueChange={handleOptionSelect} defaultValue={defaultLocale}>
      <SelectTrigger className="w-[180px] bg-gray-700">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="sr">Српски</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
