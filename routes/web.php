<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VideosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard/users', [ProfileController::class, 'index'])->name('users.index');
    Route::post('/dashboard/users/{user}/role', [ProfileController::class, 'updateRole'])->name('users.updateRole');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/dashboard/videos', [VideosController::class, 'index'])->name('videos.index');
    Route::get('/dashboard/AddVideos', [VideosController::class, 'create'])->name('videos.create');
    Route::post('/dashboard/AddVideos', [VideosController::class, 'store'])->name('videos.store');
        
});


require __DIR__.'/auth.php';
