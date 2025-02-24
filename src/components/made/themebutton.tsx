'use client'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeButton() {
    const {theme, setTheme} = useTheme()
    const changeTheme = () => setTheme(theme == 'dark' ? 'light' : 'dark')
    return (
        <div className="p-5">
            <Button onClick={()=>changeTheme()} variant="outline" size="icon" className="bg-white dark:bg-black">
                <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 dark:scale-0 transition`} />
                <Moon className={`absolute h-[1.2rem] w-[1.2rem] dark:scale-100 scale-0 dark:rotate-0 transition rotate-90`} />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    )
}