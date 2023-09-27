import DisplayPrices from "@/components/shared/price-display/DisplayPrices"
import Footer from "@/components/shared/navigation/footer/Footer"
import MobileFooter from "@/components/shared/navigation/footer/MobileFooter"

export default function FooterContainer() {
    return (
        <>
            {/* Desktop view */}
            <div className="hidden min-[640px]:block">
                <Footer />
            </div>
            {/* Mobile view */}
            <div className="block min-[640px]:hidden">
                <MobileFooter />
            </div>
        </>
    )
}