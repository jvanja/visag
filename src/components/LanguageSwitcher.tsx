import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from 'next/router'
import cookies from 'js-cookie';

const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = cookies.get('NEXT_LOCALE') || 'en';
  
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
    <Select onValueChange={handleOptionSelect} defaultValue={locale}>
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
