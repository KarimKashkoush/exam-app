import DiplomaCard from "./diploma-card";
import { getDiplomas } from "../../../apis/diplomas-api";
import { useState, useEffect } from "react";
import type { Diploma } from "@/features/diploma/types/diplomas";
export default function DiplomasList() {
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);

  useEffect(() => {
    const fetchDiplomas = async () => {
      try {
        const result = await getDiplomas();
        setDiplomas(result.payload.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchDiplomas();
  }, []);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {diplomas.map((diploma) => (
        <DiplomaCard key={diploma.id} diploma={diploma} />
      ))}
    </section>
  )
}
