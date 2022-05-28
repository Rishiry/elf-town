import { useElf } from "lib/elf"

export default function ProductPrice ({product}) {

    const elf = useElf()
    return (
  <>
        {elf.session.activeRegion && !elf.session.loading && elf.session.activeRegionInfo
            ? <> {
                elf.session.activeRegionInfo.currency_symbol
            }
        {
            product[elf.session.activeRegionInfo.currency_code].toFixed(2)
        } </>:<></ >
}</>
    )
}