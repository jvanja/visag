import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from 'next/navigation'


const LanguageSwitcher = () => {
  const router = useRouter();
  const handleOptionSelect = (option: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: option },
    );
  };

  return (
    <Select onValueChange={handleOptionSelect} defaultValue="sr-Cyrl">
      <SelectTrigger className="w-[180px] bg-gray-700">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en-US">English</SelectItem>
        <SelectItem value="sr-Cyrl">Српски</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
