<template>
  <div>
    <section class="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-12 md:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{{ $t('planning.hero_title') }}</h1>
          <p class="text-base md:text-xl text-blue-100">
            {{ $t('planning.hero_subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-8 md:py-12 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <div class="md:hidden text-center text-sm text-gray-500 mb-3 animate-pulse">
          <span>{{ $t('planning.swipe_hint') }}</span>
        </div>

        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="p-4 sm:p-6 border-b flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 capitalize">{{ formattedMonth }}</h2>
            <div class="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button @click="previousWeek" class="p-2 border border-gray-300 rounded hover:bg-gray-50 transition w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button @click="resetToToday" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 font-medium text-gray-700 h-10 flex-1 sm:flex-none">{{ $t('planning.today') }}</button>
              <button @click="nextWeek" class="p-2 border border-gray-300 rounded hover:bg-gray-50 transition w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div class="overflow-x-auto custom-scrollbar">
            <div class="min-w-[800px]">
              
              <div class="grid grid-cols-6 border-b bg-gray-50">
                <div class="p-4 border-r border-gray-200"></div> 
                <div v-for="day in calendarDays" :key="day.dateStr" class="p-4 text-center border-r border-gray-200">
                  <div class="text-xs text-gray-600 font-medium uppercase mb-1">{{ day.name }}</div>
                  <div :class="['text-2xl font-bold', day.isToday ? 'text-blue-600' : 'text-gray-900']">{{ day.dayNumber }}</div>
                </div>
              </div>

              <div v-for="time in timeSlots" :key="time" class="grid grid-cols-6 border-b border-gray-100 hover:bg-gray-50/50 transition">
                <div class="p-4 border-r border-gray-200 bg-gray-50 font-medium text-sm text-gray-600 flex items-center justify-center">{{ time }}</div>
                <div v-for="day in calendarDays" :key="day.dateStr + time" class="p-2 border-r border-gray-200 min-h-[80px]">
                  
                  <div v-if="checkIfBooked(day.dateStr, time)" class="h-full w-full rounded-lg bg-gray-100 border border-gray-200 flex flex-col items-center justify-center cursor-not-allowed opacity-70">
                    <span class="text-xs font-semibold text-gray-500 mb-1">{{ $t('planning.unavailable') }}</span>
                    <div class="w-8 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  <button v-else @click="openModal(day, time)" class="h-full w-full rounded-lg bg-white border-2 border-dashed border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center group cursor-pointer relative overflow-hidden">
                    <span class="text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{{ $t('planning.reserve') }}</span>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div v-if="showModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6 overflow-y-auto transition-all duration-300">
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-blue-100 overflow-hidden transform transition-all p-0 my-auto">
          
          <div class="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 h-20 md:h-24 flex items-center justify-center relative">
            <div class="bg-white/90 p-2 md:p-3 rounded-full shadow-lg border-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <button @click="showModal = false" class="absolute top-4 right-4 text-white hover:text-cyan-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div class="p-6 md:p-10 text-center">
            
            <div v-if="isSuccess" class="py-6 animate-in zoom-in duration-300">
               <div class="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
               </div>
               <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{{ $t('planning.success_title') }}</h3>
               <p class="text-gray-600 text-base md:text-lg">{{ $t('planning.success_desc') }}<br><span class="font-bold text-blue-600 break-all">{{ formData.email }}</span></p>
               <div class="mt-8 text-xs md:text-sm text-gray-400">{{ $t('planning.success_footer') }}</div>
            </div>

            <div v-else>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-950 mb-4 md:mb-6">{{ $t('planning.confirm_title') }}</h3>
              
              <div class="bg-blue-50 border border-blue-100 text-blue-900 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 text-left">
                <div class="flex items-center gap-3 md:gap-4 mb-2">
                   <div class="p-2 bg-white rounded-lg border border-blue-100 text-blue-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                   </div>
                   <p class="text-lg md:text-xl font-extrabold text-blue-950 capitalize">{{ $t('planning.selected_date', { date: selectedDateDisplay, time: selectedTime }) }}</p>
                </div>
              </div>

              <form @submit.prevent="submitBooking" class="space-y-4 md:space-y-6 text-left">
                
                <div v-if="errorMessage" class="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="text-sm font-medium">{{ errorMessage }}</span>
                </div>

                <div class="group">
                  <label class="block text-sm font-bold text-gray-700 mb-1 md:mb-2">{{ $t('planning.form_name') }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </div>
                    <input v-model="formData.name" type="text" required placeholder="Jean Dupont" class="w-full pl-12 p-3 md:p-4 border border-gray-200 bg-gray-50 rounded-2xl outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition">
                  </div>
                </div>

                <div class="group">
                  <label class="block text-sm font-bold text-gray-700 mb-1 md:mb-2">{{ $t('planning.form_email') }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>
                    </div>
                    <input v-model="formData.email" type="email" required placeholder="jean@mail.com" class="w-full pl-12 p-3 md:p-4 border border-gray-200 bg-gray-50 rounded-2xl outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition">
                  </div>
                </div>

                <div class="group">
                  <label class="block text-sm font-bold text-gray-700 mb-1 md:mb-2">{{ $t('planning.form_reason') }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                    </div>
                    <input v-model="formData.reason" type="text" required :placeholder="$t('contact.form.subjectPlaceholder')" class="w-full pl-12 p-3 md:p-4 border border-gray-200 bg-gray-50 rounded-2xl outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition">
                  </div>
                </div>

                <div class="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 mt-8 pt-6 border-t border-gray-100">
                  <button type="button" @click="showModal = false" class="w-full sm:w-auto px-6 py-3 md:py-4 border-2 border-gray-100 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 transition">{{ $t('planning.cancel') }}</button>
                  <button type="submit" :disabled="isLoading" class="w-full sm:flex-1 py-3 md:py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 transition-all flex items-center justify-center gap-3">
                    <span v-if="isLoading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {{ isLoading ? $t('planning.loading') : $t('planning.confirm') }}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n' 

const { t, locale } = useI18n() 
const route = useRoute()
const supabase = useSupabaseClient()

const currentDate = ref(new Date())
const bookedSlots = ref([])
const showModal = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')
const selectedDayObj = ref(null)
const selectedTime = ref('')
const isLoading = ref(false)
const formData = ref({ name: '', email: '', reason: '' })

const timeSlots = Array.from({ length: 9 }, (_, i) => `${(9 + i).toString().padStart(2, '0')}:00`)

const currentLocaleStr = computed(() => {
  if (locale.value === 'en') return 'en-US'
  if (locale.value === 'nl') return 'nl-NL'
  return 'fr-FR'
})

const formattedMonth = computed(() => {
  return currentDate.value.toLocaleDateString(currentLocaleStr.value, { month: 'long', year: 'numeric' })
})

const calendarDays = computed(() => {
  const week = []
  const todayStr = new Date().toDateString()
  const currentDay = new Date(currentDate.value)
  const dayOfWeek = currentDay.getDay()
  const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  currentDay.setDate(currentDay.getDate() + distanceToMonday)
  
  for (let i = 0; i < 5; i++) {
    const d = new Date(currentDay)
    week.push({
      dateObj: d,
      name: d.toLocaleDateString(currentLocaleStr.value, { weekday: 'short' }),
      dayNumber: d.getDate(),
      isToday: d.toDateString() === todayStr,
      dateStr: d.toISOString().split('T')[0]
    })
    currentDay.setDate(currentDay.getDate() + 1)
  }
  return week
})

const previousWeek = () => { currentDate.value = new Date(currentDate.value.setDate(currentDate.value.getDate() - 7)) }
const nextWeek = () => { currentDate.value = new Date(currentDate.value.setDate(currentDate.value.getDate() + 7)) }
const resetToToday = () => { currentDate.value = new Date() }
const checkIfBooked = (dateStr, time) => { return bookedSlots.value.includes(`${dateStr}_${time}`) }

const selectedDateDisplay = computed(() => {
  return selectedDayObj.value ? selectedDayObj.value.dateObj.toLocaleDateString(currentLocaleStr.value) : ''
})

const openModal = (dayObj, time) => {
  selectedDayObj.value = dayObj
  selectedTime.value = time
  isSuccess.value = false
  errorMessage.value = ''
  
  let defaultReason = ''
  if (route.query.service) {
    const serviceId = route.query.service.toString()
    defaultReason = `${t('planning.reasonPrefix')} ${t('serviceNames.' + serviceId)}`
  }

  formData.value = { name: '', email: '', reason: defaultReason }
  showModal.value = true
}

const fetchAppointments = async () => {
  try {
    const { data, error } = await supabase.from('appointments').select('date_string, time_string')
    if (!error && data) {
      bookedSlots.value = data.map(app => `${app.date_string}_${app.time_string}`)
    }
  } catch (err) { console.error(err) }
}

onMounted(() => { fetchAppointments() })

const submitBooking = async () => {
  isLoading.value = true
  errorMessage.value = '' 
  
  try {
    const { data, error } = await supabase.from('appointments').insert([{
      date_string: selectedDayObj.value.dateStr,
      time_string: selectedTime.value,
      client_name: formData.value.name,
      client_email: formData.value.email,
      service_reason: formData.value.reason
    }]).select()

    if (error) throw error

    await $fetch('/api/notify-booking', {
      method: 'POST',
      body: {
        id: data[0].id,
        name: formData.value.name,
        email: formData.value.email,
        date: selectedDayObj.value.dateStr,
        time: selectedTime.value,
        reason: formData.value.reason,
        locale: locale.value 
      }
    })

    isSuccess.value = true
    await fetchAppointments()
    
    setTimeout(() => {
      showModal.value = false
      isSuccess.value = false
    }, 4000)

  } catch (error) {
    console.error(error)
    errorMessage.value = t('planning.error_msg')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Scrollbar personnalisée et fluide pour mobile */
.custom-scrollbar {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 10px;
}

.animate-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 