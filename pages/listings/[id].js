import { useRouter } from "next/router";
import LinkComponent from "@/components/Links";

export default function Detailpage() {
  const router = useRouter();
  const { id } = router.query;
  const prevUrl = router.route;
  console.log(prevUrl, id);

  return (
    <>
      <LinkComponent href={prevUrl}>Back</LinkComponent>
    </>
  );
}
